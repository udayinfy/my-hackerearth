package com.hiring.seclore.problem2;

import java.io.BufferedReader;
import java.io.InputStreamReader;

class TestClass {
	public static void main(String args[]) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine(); // Reading input
		int N = Integer.parseInt(input);

		String[] A = br.readLine().split(" ");
		String[] B = br.readLine().split(" ");
		int[] arrA = new int[N];
		int[] arrB = new int[N];
		for (int i = 0; i < N; i++) {
			arrA[i] = Integer.parseInt(A[i]);
			arrB[i] = Integer.parseInt(B[i]);
		}

	}
}
