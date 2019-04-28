package com.hiring.meesho.problem1;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Solution {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String name = br.readLine(); // Reading input from STDIN
		int N = Integer.parseInt(name);

		int[] arrA = new int[N];
		int[] arrB = new int[N];

		String[] A = br.readLine().split(" ");
		String[] B = br.readLine().split(" ");
		for (int i = 0; i < N; i++) {
			arrA[i] = Integer.parseInt(A[i]);
			arrB[i] = Integer.parseInt(B[i]);
		}
		int M = Integer.parseInt(br.readLine());
		System.out.println(M);

	}
}

