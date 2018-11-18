package com.hiring.seclore.problem1;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

class TestClass {
	public static void main(String args[]) throws Exception {
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
		Map<Pair, Integer> map = new HashMap<>();

		for (int i = 0; i < M; i++) {
			String[] temp = br.readLine().split(" ");
			map.put(new Pair(Integer.parseInt(temp[0]), Integer.parseInt(temp[1])), Integer.parseInt(temp[2]));
		}
		//
		for (int i = 0; i < N; i++) {
			int a = arrA[i];
		}

		//
	}

}

class Pair {
	int x;
	int y;

	Pair(int x, int y) {
		this.x = x;
		this.y = y;
	}
}
