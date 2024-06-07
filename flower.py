import turtle

# Set up the turtle window
turtle.bgcolor("blue")
turtle.title("Flower")

# Create the turtle pen
pen = turtle.Turtle()
pen.speed(0)
pen.pensize(2)

# Function to draw a petal
def draw_petal():
    pen.circle(100, 300)
    pen.left(200)
    pen.circle(100, 300)
    pen.left(300)

# Function to draw the flower
def draw_flower():
    pen.color("pink")
    for _ in range(200):
        draw_petal()
        pen.left(300)

# Draw the complete flower
draw_flower()

# Hide the turtle pen
pen.hideturtle()

# Keep the window open
turtle.done()