let treeArr = [
  {id: 0, name: 'root'},
  {id: 1, name: '0-1', pid: 0},
  {id: 2, name: '1-2', pid: 1},
  {id: 3, name: '2-3', pid: 2},
  {id: 4, name: '2-4', pid: 2},
  {id: 5, name: '4-5', pid: 4}
]

let tree = {
  id: 0,
  name: 'root',
  children: [
    {
      id: 1,
      name: '0-1',
      pid: 0,
      children: [
        {
          id: 2,
          name: '1-2',
          pid: 1,
          children: [
            {
              id: 3,
              name: '2-3',
              pid: 2,
              children: []
            },
            {
              id: 4,
              name: '2-4',
              pid: 2,
              children: [
                {
                  id: 5,
                  name: '4-5',
                  pid: 4
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

function treefiy(items) {
  let root = {id: 0, name: 'root'};
  root.chihdren = getChilds(0);
  function getChilds(id) {
    return items
      .filter(item => item.pid == id)
      .map(item => {
        item.chihdren = getChilds(item.id);
        return item;
      })
  }
  return root
}

function flatTree(tree) {
  let result = [];
  function getTreeNodes(tree, id) {
    result.push({
      id: tree.id,
      name: tree.name,
      pid: id
    })
    if (tree.children) {
      tree.children.forEach(item => {
        getTreeNodes(item, tree.id)
      })
    }
  }
  getTreeNodes(tree)

  return result;
}

console.log(flatTree(tree))