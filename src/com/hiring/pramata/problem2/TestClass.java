package com.hiring.pramata.problem2;

import java.io.*;
import java.util.*;

/**
 * hiring/pramata-coding-challenge problem 2
 * 
 * @author udakkuma 
 * @Date 5th May 2019
 */
public class TestClass {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter wr = new PrintWriter(System.out);
		int n = Integer.parseInt(br.readLine().trim());
		int m = Integer.parseInt(br.readLine().trim());
		char[][] A = new char[n][m];
		for (int i_A = 0; i_A < n; i_A++) {
			String[] arr_A = br.readLine().split(" ");
			for (int j_A = 0; j_A < arr_A.length; j_A++) {
				A[i_A][j_A] = arr_A[j_A].charAt(0);
			}
		}

		String out_ = solve(A);
		System.out.println(out_);

		wr.close();
		br.close();
	}

	static String solve(char[][] A) {
		return null;
		// Write your code here

	}
}