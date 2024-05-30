/**
 * Title: Climbing the Fibonacci Stairs
 * 
 * Exercise Description:
 * 
 * You are a software engineer tasked with creating a program to help a friendly robot named RoboClimb.
 * RoboClimb loves climbing stairs and wants to know in how many different ways it can climb a staircase
 * of a given number of steps. RoboClimb can only take one or two steps at a time. Your task is to write
 * a JavaScript function that calculates the number of distinct ways RoboClimb can reach the top of a staircase
 * with `n` steps.
 * 
 * To make things interesting, RoboClimb's journey follows the Fibonacci sequence. For example:
 * - A staircase with 2 steps can be climbed in 2 ways: (1+1) or (2).
 * - A staircase with 3 steps can be climbed in 3 ways: (1+1+1), (1+2), or (2+1).
 * - A staircase with 4 steps can be climbed in 5 ways: (1+1+1+1), (1+1+2), (1+2+1), (2+1+1), or (2+2).
 * - A staircase with 5 steps can be climbed in 8 ways.
 * 
 * Your goal is to implement a function that takes an integer `n` representing the number of steps in the staircase
 * and returns the number of distinct ways RoboClimb can reach the top.
 * 
 * Input and Output Examples:
 * 
 * Example 1:
 * Input: n = 2
 * Output: 2
 * Explanation: There are 2 ways to climb 2 steps: (1+1) or (2).
 * 
 * Example 2:
 * Input: n = 3
 * Output: 3
 * Explanation: There are 3 ways to climb 3 steps: (1+1+1), (1+2), or (2+1).
 * 
 * Example 3:
 * Input: n = 4
 * Output: 5
 * Explanation: There are 5 ways to climb 4 steps: (1+1+1+1), (1+1+2), (1+2+1), (2+1+1), or (2+2).
 * 
 * Example 4:
 * Input: n = 5
 * Output: 8
 * Explanation: There are 8 ways to climb 5 steps: (1+1+1+1+1), (1+1+1+2), (1+1+2+1), (1+2+1+1), (2+1+1+1), (2+2+1), (2+1+2), or (1+2+2).
 * 
 */
