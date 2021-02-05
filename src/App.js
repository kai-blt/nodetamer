import {useEffect, useState} from 'react'
import Xarrow from'react-xarrows';
import Draggable from 'react-draggable';
import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: auto;
  padding: 2%;
`
const InputBox = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    width: 50%;
  }
`;

const NodeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  height: 100vh;
  max-width: 100%;
  margin: 2%;
`;

const Node = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #8cd3ff;
  border-radius: 100%;
  background-color: beige;
  width: 150px;
  height: 150px;
  font-size: 4rem;
  text-shadow: none;
  color: #000;
  box-shadow: 6px 6px 12px #111;
`;

const Symbol = styled.span`
   color: #02bfe7;
   font-weight: 700;
`;


function App() {
  const [nodes, setNodes] = useState("");
  const [connections, setConnections] = useState("");

  const [nodeArray, setNodeArray] = useState([]);
  const [connectionsArray, setConnectionsArray] = useState([]);


  useEffect(() => {
    const newNodeArray = Array.from(nodes.split(","))
    setNodeArray(newNodeArray)
    const newConnections = Array.from(connections.split("&").join("&").split(">").join(">").split("<").join("<"))
    setConnectionsArray(newConnections)
   }, [nodes, connections])

  
  const handleNodes = (e) => {
    setNodes(e.target.value);
  }

  const handleConnections = (e) => {
    setConnections(e.target.value);
  }

  const handleClick = (e) => {
    //Check if triple click
    if (e.detail === 3) {
      const nodessss = document.querySelector(`#${e.target.id}`)
      if (nodessss.style.backgroundColor == "seagreen") {
        return nodessss.style.backgroundColor = "beige"
      } else {
        return nodessss.style.backgroundColor = "seagreen"
      }
    }    
  }


  return (
    <>
    <div>
      <header>
        <h1>Trees and Graphs</h1>
      </header> 
      <Container>
        <InputBox>
          <div>
            <label>Add Nodes: &nbsp;</label>
            <input
              type="text"
              name="nodes"
              value={nodes}
              onChange={handleNodes}
            />
            <p>Add nodes by typing comma separated node values in this input box</p>
          </div>
          <div>
            <label>Add Connections: &nbsp;</label>
            <input
              type="text"
              name="nodes"
              value={connections}
              onChange={handleConnections}
            />
            <p>
              Use the following characters for connections: &nbsp;&nbsp;
              <Symbol>&gt;</Symbol>&nbsp;&nbsp;for ---&gt; , <Symbol>&lt;</Symbol>&nbsp;&nbsp;for &lt;--- ,
              or <Symbol>&amp;</Symbol>&nbsp;&nbsp;for &lt;---&gt;
            </p>
          </div>
        </InputBox>
        <NodeContainer>
        {nodes
          ? nodeArray.map(n => <Draggable><Node id={n} onClick={handleClick}>{n}</Node></Draggable>)
          : null 
        }
        {connectionsArray
          ? connectionsArray.map((n, index) => {
              switch(n) {
                  case ">": 
                    const start = (typeof connectionsArray[index - 1]) !== "undefined" ? connectionsArray[index - 1] : 0
                    const end = (typeof connectionsArray[index + 1]) !== "undefined" ? connectionsArray[index + 1] : 0
                    return <Xarrow start={start} end={end} color="#02bfe7"/>
                  case "<":
                    const start2 = (typeof connectionsArray[index + 1]) !== "undefined" ? connectionsArray[index + 1] : 0
                    const end2 = (typeof connectionsArray[index - 1]) !== "undefined" ? connectionsArray[index - 1] : 0
                    return <Xarrow start={start2} end={end2} color="#02bfe7"/>
                  case "&":
                    const start3 = (typeof connectionsArray[index - 1]) !== "undefined" ? connectionsArray[index - 1] : 0
                    const end3 = (typeof connectionsArray[index + 1]) !== "undefined" ? connectionsArray[index + 1] : 0
                     
                    const start4 = (typeof connectionsArray[index + 1]) !== "undefined" ? connectionsArray[index + 1] : 0
                    const end4 = (typeof connectionsArray[index - 1]) !== "undefined" ? connectionsArray[index - 1] : 0
                    return <div><Xarrow start={start3} end={end3} color="#02bfe7"/><Xarrow start={start4} end={end4} color="#02bfe7"/></div>
                  case " ":
                    break;
                  default:
                    return
                }
            })
          : null
        }
        </NodeContainer>
      </Container>   
    </div>
    </>
  );
}

export default App;
