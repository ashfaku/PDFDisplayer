.data

x: .word 5
a: .word 2
b: .word -3
c: .word 10

.text

# load variables into registers
lw $t0, x
lw $t1, a
lw $t2, b
lw $t3, c

#implement a*x*x + b*x + c
mul $t4, $t0, $t0 # x*x
mul $t5, $t1, $t4 # a*x*x
mul $t6, $t2, $t0 # b*x
add $t7, $t5, $t6 # a*x*x + b*x
add $t8, $t7, $t3 # a*x*x + b*x + c

li $v0, 1
move $a0, $t8
syscall

li $v0, 10
syscall