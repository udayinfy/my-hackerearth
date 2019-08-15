package com.hiring.dialpad.problem2;

import java.util.Scanner;

class TestClass {
	public static void main(String args[]) throws Exception {
		Scanner s = new Scanner(System.in);

		int N = s.nextInt();
		int K = s.nextInt();

		int[] arr = new int[N];
		for (int i = 0; i < N; i++) {
			arr[i] = s.nextInt();
		}

		int result = solve(arr, N, K);
		System.out.println(result);

	}

	static int solve(int[] arr, int N, int K) {
		int finalSum = 0;

		return finalSum;

	}
}
