package com.hiring.pelatro.problem1;

import java.io.*;
import java.util.*;

public class TestClass {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter wr = new PrintWriter(System.out);
		int T = Integer.parseInt(br.readLine().trim());
		for (int t_i = 0; t_i < T; t_i++) {
			int N = Integer.parseInt(br.readLine().trim());
			int M = Integer.parseInt(br.readLine().trim());
			int[][] A = new int[N][M];
			for (int i_A = 0; i_A < N; i_A++) {
				String[] arr_A = br.readLine().split(" ");
				for (int j_A = 0; j_A < arr_A.length; j_A++) {
					A[i_A][j_A] = Integer.parseInt(arr_A[j_A]);
				}
			}

			long out_ = solve(A, N, M);
			System.out.println(out_);
			System.out.println("");
		}

		wr.close();
		br.close();
	}

	static long solve(int[][] A, int N, int M) {
		Long result = 0l;
		
		return result;
		// Write your code here

	}
}
