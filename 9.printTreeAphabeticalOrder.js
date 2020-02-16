// Q9.
// Print the following tree in alphabetical order https://drive.google.com/uc?id=1WiTdeqPgpQlgCBgSuwRGCcjajAO3JHNw&export=download
// Another text visualization of the tree could be
//           (F)
//     (D)       (J)
//   (B) (E)  (H)   (K)
// (A)(C)   (G) (I)
// The tree is already built for you in the code below.

class BinaryTreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Create nodes
let a = new BinaryTreeNode("A");
let b = new BinaryTreeNode("B");
let c = new BinaryTreeNode("C");
let d = new BinaryTreeNode("D");
let e = new BinaryTreeNode("E");
let f = new BinaryTreeNode("F");
let g = new BinaryTreeNode("G");
let h = new BinaryTreeNode("H");
let i = new BinaryTreeNode("I");
let j = new BinaryTreeNode("J");
let k = new BinaryTreeNode("K");

// Connect nodes, thus creating the Tree
f.left = d;
f.right = j;

d.left = b;
d.right = e;

b.left = a;
b.right = c;

j.left = h;
j.right = k;

h.left = g;
h.right = i;

// Implement your code here
const printTreeAlphabeticalOrder = (root) => {
  console.log(root.val);

  if (root) {

  }
}

printTreeAlphabeticalOrder(f)
// Should print
// A
// B
// C
// D
// E
// F
// G
// H
// I
// J
// K
