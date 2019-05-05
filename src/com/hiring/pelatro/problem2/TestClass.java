package com.hiring.pelatro.problem2;

import java.io.*;
import java.util.*;

public class TestClass {

	public static Map<Integer, Integer> strngthMap = new HashMap<>();

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter wr = new PrintWriter(System.out);

		String[] arr0 = br.readLine().split(" ");

		int N = Integer.parseInt(arr0[0]);
		int Q = Integer.parseInt(arr0[1]);
		int[] A = new int[N];
		String[] arr = br.readLine().split(" ");

		for (int i = 0; i < N; i++) {
			A[i] = Integer.parseInt(arr[i]);
		}

		for (int i = 0; i < Q; i++) {
			arr = br.readLine().split(" ");
			if (Integer.parseInt(arr[0]) == 1) {
				int L = Integer.parseInt(arr[1]);
				int R = Integer.parseInt(arr[2]);
				// System.out.println(Arrays.toString(A));
				System.out.println(solve(A, L, R));
			} else {
				int x = Integer.parseInt(arr[1]);
				int p = Integer.parseInt(arr[2]);
				A[p - 1] = x;
			}
		}
	}

	static int solve(int[] A, int L, int R) {
		int strength = 0;
		for (int i = 0; i < A.length; i++) {
			if (A[i] >= L && A[i] <= R) {
				int y = (int) Math.sqrt(A[i]);
				strength += getStrength(y);
			} else {

			}
		}
		return strength;
	}

	static int getStrength(int num) {
		if (strngthMap.containsKey(num)) {
			return strngthMap.get(num);
		}
		boolean isEven = (num % 2 == 0);
		int res = 1;
		/*for (int i = 2; i < num; i++) {
			if (isEven && i % 2 == 0)
				continue;
			if (coprime(i, num)) {
				res++;
			}
		}*/
		
		res = primeFactors(num);
		
		strngthMap.put(num, res);
		return res;
	}

	public static int primeFactors(int n) {
		int N = n;
		// Print the number of 2s that divide n
		Set<Integer> set = new HashSet<>();
		while (n % 2 == 0) {
			set.add(2);
			n /= 2;
		}

		// n must be odd at this point. So we can
		// skip one element (Note i = i +2)
		for (int i = 3; i <= Math.sqrt(n); i += 2) {
			// While i divides n, print i and divide n
			while (n % i == 0) {
				set.add(i);
				n /= i;
			}
		}

		// This condition is to handle the case whien
		// n is a prime number greater than 2
		if (n > 2)
			set.add(n);
		int coprime = 1;
		for(int a : set) {
			coprime *= ((N*a-N)/a);
		}
		return coprime;
	}

	static boolean coprime(int a, int b) {

		if (__gcd(a, b) == 1)
			return true;
		else
			return false;
	}

	static int __gcd(int a, int b) {
		// Everything divides 0
		if (a == 0 || b == 0)
			return 0;

		// base case
		if (a == b)
			return a;

		// a is greater
		if (a > b)
			return __gcd(a - b, b);

		return __gcd(a, b - a);
	}

}