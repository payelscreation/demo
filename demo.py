
# print("python first program...")

# print("*")
# print("**")
# print("***")
# print("****")

# name= "payel"
# age= 20

# name="Anuska"
# age=19
# print(name)
# print(age)

# name = ("Tony Stark")
# age = 51
# is_genius = True
# print (name )
# print(age )
# print(is_genius)
# name input program
# name = input ("what is your name?")
# print(name)
# # concatenation
# print ("Hello" + name)
# exercise
# nm = input("what is your superhero name?")
# # print(nm)
# print (nm + " is secretly a superhero")
# Function to print the heart pattern
def print_heart():
    for row in range(6):
        for col in range(7):
            # Conditions for printing '*'
            if (row == 0 and col % 3 != 0) or (row == 1 and col % 3 == 0) or (row - col == 2) or (row + col == 8):
                print("*", end=" ")
            else:
                print(" ", end=" ")
        print()

# Call the function
print_heart()

import turtle

def draw_heart():
    window = turtle.Screen()
    window.bgcolor("white")

    heart = turtle.Turtle()
    heart.color("red")
    heart.begin_fill()

    heart.left(140)
    heart.forward(180)
    heart.circle(-90, 200)
    heart.left(120)
    heart.circle(-90, 200)
    heart.forward(180)

    heart.end_fill()

    heart.hideturtle()
    window.mainloop()

draw_heart()