class Node {
  constructor(value) {
    this.value = value
    this.right = null
    this.left = null
  }
}

const findDepthValues = (root, depth = 0, values = {}) => {
  if (!root) return
  values[depth] = [...(values[depth] || []), root.value]

  findDepthValues(root.left, depth + 1, values)
  findDepthValues(root.right, depth + 1, values)

  return values
}

const root = new Node(4)
root.left = new Node(2)
root.right = new Node(6)

root.left.left = new Node(1)
root.left.right = new Node(3)

root.right.left = new Node(5)
root.right.right = new Node(7)

root.right.right.right = new Node(99)
root.right.right.right.right = new Node(101)

findDepthValues(root)