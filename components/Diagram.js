import { useState, useRef } from "react";
import styles from "../styles/diagram.module.css";
import * as go from "gojs";
import { ReactDiagram } from "gojs-react";
import { createNode, updateNode, deleteNode, createAxon, updateAxon, deleteAxon } from "../pages/api/routes";
import { colorToString } from "../lib/color";

import Popup from "./Popup";
import { generateId } from "../lib/id";

export default function Diagram(props) {

    // * ##### Diagram #####
    function initDiagram() {
        const $ = go.GraphObject.make;
        const diagram = $(go.Diagram,
            {
                "undoManager.isEnabled": true,
                model: new go.GraphLinksModel({
                    linkKeyProperty: "key"
                }),
                initialPosition: go.Point.parse("0 0"),
                initialAutoScale: go.Diagram.None,
            });

        // * ### LINK TEMPLATE ###
        diagram.linkTemplate =
            $(go.Link,
                {
                    relinkableFrom: true, relinkableTo: true
                },
                $(go.Shape, { isPanelMain: true, stroke: "transparent", strokeWidth: 25 }),
                $(go.Shape, { isPanelMain: true, strokeWidth: 3 }),
            );

        //*  ### NODE TEMPLATE ###
        diagram.nodeTemplate =
            $(go.Node, "Auto",
                new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
                $(go.Shape, "Ellipse",
                    {
                        strokeWidth: 3,
                        fill: "white",
                        width: 135,
                        height: 90,
                        portId: "",
                        cursor: "pointer",
                        fromLinkable: true, fromLinkableSelfNode: false, fromLinkableDuplicates: false,
                        toLinkable: true, toLinkableSelfNode: false, toLinkableDuplicates: false
                    },
                    new go.Binding("fill", "color")
                ),
                $(go.Panel, "Vertical",
                    $(go.TextBlock,
                        {
                            font: "14pt Itim",
                            width: 90,
                            editable: true,
                            textAlign: "center",
                            verticalAlignment: go.Spot.Center,
                            isMultiline: true,
                            wrap: go.TextBlock.WrapFit
                        },
                        new go.Binding("text", "label").makeTwoWay()
                    )
                ),
                {
                    contextMenu:
                        $("ContextMenu",
                            $("ContextMenuButton",
                                $(go.TextBlock, "[Open]",
                                    {
                                        margin: 5,
                                        font: "bold 12pt Fira Code",
                                        stroke: "black",
                                    }),
                                { click: open }
                            ),
                            $("ContextMenuButton",
                                $(go.TextBlock, "White",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changeWhite }
                            ),
                            $("ContextMenuButton",
                                {
                                    "_buttonFillOver": "#ff8888",
                                },
                                $(go.TextBlock, "Red",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changeRed }
                            ),
                            $("ContextMenuButton",
                                {
                                    "_buttonFillOver": "#ffc87c",
                                },
                                $(go.TextBlock, "Orange",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changeOrange }
                            ),
                            $("ContextMenuButton",
                                {
                                    "_buttonFillOver": "#fcffa4"
                                },
                                $(go.TextBlock, "Yellow",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changeYellow }
                            ),
                            $("ContextMenuButton",
                                {
                                    "_buttonFillOver": "#8fef8f"
                                },
                                $(go.TextBlock, "Green",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changeGreen }
                            ),
                            $("ContextMenuButton",
                                {
                                    "_buttonFillOver": "lightblue"
                                },
                                $(go.TextBlock, "Blue",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changeBlue }
                            ),
                            $("ContextMenuButton",
                                {
                                    "_buttonFillOver": "#bf94e4"
                                },
                                $(go.TextBlock, "Purple",
                                    {
                                        margin: 2,
                                        font: "12pt Itim"
                                    }),
                                { click: changePurple }
                            ),
                        )
                }
        )
        
        // * ### OPEN SESAME ###
        function open(e, obj) {
            togglePopup(obj.part.data);
        }

        function changeWhite(e, obj) {
            diagram.commit((d) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                d.model.set(node, "color", "white")
            })
        }

        function changeRed(e, obj) {
            diagram.commit((d) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                d.model.set(node, "color", "#ff8888")
            })
        }

        function changeOrange(e, obj) {
            diagram.commit((d) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                d.model.set(node, "color", "#ffc87c")
            })
        }

        function changeYellow(e, obj) {
            diagram.commit((diagram) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                diagram.model.set(node, "color", "#fcffa4")
            })
        }

        function changeGreen(e, obj) {
            diagram.commit((diagram) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                diagram.model.set(node, "color", "#8fef8f")
            })
        }

        function changeBlue(e, obj) {
            diagram.commit((diagram) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                diagram.model.set(node, "color", "lightskyblue")
            })
        }

        function changePurple(e, obj) {
            diagram.commit((diagram) => {
                const contextMenu = obj.part;
                const node = contextMenu.data;
                diagram.model.set(node, "color", "#bf94e4")
            })
        }
        
        // * ### CONTEXT MENU ###
        diagram.contextMenu =
            $(go.Adornment, "Vertical",
                $("ContextMenuButton",
                    $(go.TextBlock, "[Create]",
                        {
                            margin: 5,
                            font: "bold 12pt Fira Code"
                        }),
                    { click: addNode })
                // more ContextMenuButtons would go here
            );
    
        function addNode(e, obj) {
            diagram.commit((d) => {
                // create node at cursor
                const node = { label: "New Node" };
                d.model.addNodeData(node);
                const part = d.findPartForData(node);
                part.location = e.diagram.toolManager.contextMenuTool.mouseDownPoint;

                // Update new node's initial properties
                const newNode = d.model.nodeDataArray.slice(-1)[0];
                const newKey = generateId(Math.pow(2, 8))
                const newLabel = "Node" + newNode.key.toString();
                
                d.model.set(newNode, "key", newKey);
                d.model.set(newNode, "label", newLabel);
                d.model.set(newNode, "color", "white");
                d.model.set(newNode, "entries", []);
                d.model.set(newNode, "tasks", []);
            })
        }

        diagram.addDiagramListener("LinkDrawn", (e) => {
            // Generates an ID for the new link
            const newLink = e.diagram.model.linkDataArray.slice(-1)[0]
            e.diagram.model.set(newLink, "key", generateId(Math.pow(2, 8)))
        })
        
        return diagram;
    }
    
    // * ##### Event Handler #####
    // model inserts nodes and links when the page first lods
    const initial = useRef(0); 
    function handleModelChange(changes) {
        if (initial.current) {
            const modifiedNodeData = changes.modifiedNodeData;
            const insertedNodeKeys = changes.insertedNodeKeys;
            const removedNodeKeys = changes.removedNodeKeys;

            const modifiedLinkData = changes.modifiedLinkData;
            const insertedLinkKeys = changes.insertedLinkKeys;
            const removedLinkKeys = changes.removedLinkKeys;

            // * ##### NODES #####
            // Create
            if (insertedNodeKeys != undefined) {
                for (let i = 0; i < modifiedNodeData.length; i++) {
                    const newKey = modifiedNodeData[i].key;
                    const newLocation = modifiedNodeData[i].location;
                    const newLabel = modifiedNodeData[i].label;
                    const color = colorToString(modifiedNodeData[i].color.split("")); // splits each char of the color into an array

                    createNode(newKey, newLocation, newLabel, color);
                    console.log("C-N:", [modifiedNodeData[i]]);
                }
            }

            // Update
            if (insertedNodeKeys == undefined) {
                if (modifiedNodeData != undefined) {
                    for (let i = 0; i < modifiedNodeData.length; i++) {
                        const key = modifiedNodeData[i].key;
                        const location = modifiedNodeData[i].location;
                        const label = modifiedNodeData[i].label;
                        const color = colorToString(modifiedNodeData[i].color.split("")); // splits each char of the color into an array
                        
                        updateNode(key, location, label, color);
                        console.log("U-N:", { label: label }, [modifiedNodeData[i]]);
                    }
                }
            }

            // Delete
            if (removedNodeKeys != undefined) {
                for (let i = 0; i < removedNodeKeys.length; i++) {
                    const key = removedNodeKeys[i];

                    deleteNode(key);
                    console.log("D-N:", { id: key });
                }
            }

            // * ##### AXONS #####
            // Create
            if (insertedLinkKeys != undefined) {
                for (let i = 0; i < insertedLinkKeys.length; i++) {
                    const key = modifiedLinkData[i].key;
                    const from = modifiedLinkData[i].from;
                    const to = modifiedLinkData[i].to;

                    createAxon(key, from, to)
                    console.log("C-A:", { from: from, to: to });
                }
            }

            // Update
            if (insertedLinkKeys == undefined) {
                if (modifiedLinkData != undefined) {
                    const key = modifiedLinkData[0].key.toString()
                    const from = modifiedLinkData[0].from;
                    const to = modifiedLinkData[0].to;

                    updateAxon(key, from, to)
                    console.log("U-A:", { id: key }, { from: from, to: to })
                }
            }

            // Delete
            if (removedLinkKeys != undefined) {
                for (let i = 0; i < removedLinkKeys.length; i++) {
                    console.log(removedLinkKeys);
                    const key = removedLinkKeys[i];

                    deleteAxon(key);
                    console.log("D-A:", { id: key });
                }
            }
        } else { initial.current = 1; }
    }

    // * ##### Popup ######
    const [isOpen, setIsOpen] = useState(0);
    const [node, setNode] = useState(null);

    function togglePopup(node) {
        setNode(node);
        setIsOpen(!isOpen);
    }

    return (
        <>
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName={styles.diagram}
                onModelChange={handleModelChange}
                nodeDataArray={props.nodeDataArray}
                linkDataArray={props.linkDataArray}
            />

            {
                isOpen && <Popup
                    handlePopup={togglePopup}
                    node={node}
                />
            }
        </>
    );
}