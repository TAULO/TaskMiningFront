import { React } from 'react';
import ReactFlow, {Background, MiniMap, Controls} from 'reactflow';
import 'reactflow/dist/style.css';
import TaskFlowItemComponent from './TaskFlowItemComponent';

const nodeTypes = {
  task: TaskFlowItemComponent
}

export default function Flow({ indvTask }) {
  const nodes = []
  const edges = []

  function loadFlowChart() {
    for (let i = 0; i < indvTask.tasks?.length || 0; i++) {
      const index = i + 1
      nodes.push(
        {
          id: `node-${index}`,
          type: "task",
          position: {x: 120, y: 200 * index},
          data: {data: {
            index: index,
            task: indvTask.tasks[i],
            ui: indvTask.userInteractions[i],
            time: indvTask.individualTaskTime[i]
          }}
        })
      edges.push(
        {
          id: `node-${index}`,
          source: `node-${index}`,
          target: `node-${index + 1}`,
          animated: true
        })
    }
  }
  loadFlowChart()

  const edgeOptions = {
    animated: true,
    style: {  
      stroke: 'orange',
    },
  };

  return (
      <ReactFlow className='border'
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeOptions={edgeOptions}
        > 
         <Controls />
        <MiniMap></MiniMap>
        <Background></Background>
      </ReactFlow>
    )
}
