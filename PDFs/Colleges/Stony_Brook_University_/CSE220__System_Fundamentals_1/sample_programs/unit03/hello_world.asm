.data

greeting: .asciiz "Hello, world!\n"
salary: .word 20000
raise: .word 500

.text

# Print a string on screen
li $v0, 4
la $a0, greeting
syscall

lw $t0, salary
lw $t1, raise
add $t0, $t0, $t1

li $v0, 1
move $a0, $t0
syscall

# Terminate the program
li $v0, 10
syscall