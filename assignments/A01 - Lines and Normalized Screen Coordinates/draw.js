function draw() {
  // line(x1,y1, x2,y2)
  // draws a line from a point at Normalized screen coordinates x1,y1 to Normalized screen coordinates x2,y2

  // Here there are a few random lines, you will have to replace with your code
  line(-0.5, 0.3, -0.5, -0.3)
  line(-0.5, 0.3, 0.3, 0.3)
  line(-0.5, -0.3, 0.3, -0.3)
  
  
  x = 0
  
  for(i = 0; i < 31; i++){
    
    y = x + (Math.PI/32)
    line(0.3 + 0.3 * Math.sin(x), 0.3 * Math.cos(x), 0.3 + 0.3 * Math.sin(y), 0.3 * Math.cos(y))
    line(0.3 + 0.3 * Math.sin(x), -(0.3 * Math.cos(x)), 0.3 + 0.3 * Math.sin(y), -(0.3 * Math.cos(y)))
    x += Math.PI/64
  }
}
