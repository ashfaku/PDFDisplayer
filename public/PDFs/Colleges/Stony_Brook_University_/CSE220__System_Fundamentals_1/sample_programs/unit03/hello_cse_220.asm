.data

greeting: .asciiz "Hello CSE 220"
endl: .asciiz "\n"
prompt1: .asciiz "Enter your age: "
age: .word
output1: .asciiz "Your age in 5 years will be: "

.text

# print greeting
li $v0, 4
la $a0, greeting
syscall

# print newline
li $v0, 4
la $a0, endl
syscall

# print prompt
li $v0, 4
la $a0, prompt1
syscall

# load input (stored in $v0)
li $v0, 5
syscall

# save a copy of the age
move $t0, $v0
addi $t0, $t0, 5

# print output
li $v0, 4
la $a0, output1
syscall

# print age
li $v0, 1
move $a0, $t0
syscall

# print newline
li $v0, 4
la $a0, endl
syscall

#terminate program
li $v0, 10
syscall
