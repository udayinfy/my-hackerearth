package com.hiring.pramata.problem1;

import java.io.*;
import java.util.*;

/**
 * hiring/pramata-coding-challenge problem 1
 * 
 * @author udakkuma Date 5th May 2019
 */
public class TestClass {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		PrintWriter wr = new PrintWriter(System.out);
		int T = Integer.parseInt(br.readLine().trim());
		for (int t_i = 0; t_i < T; t_i++) {
			int N = Integer.parseInt(br.readLine().trim());
			long K = Long.parseLong(br.readLine().trim());
			String[] arr_A = br.readLine().split(" ");
			long[] A = new long[N];
			for (int i_A = 0; i_A < arr_A.length; i_A++) {
				A[i_A] = Long.parseLong(arr_A[i_A]);
			}

			long out_ = fun(A, K);
			System.out.println(out_);
			System.out.println("");
		}

		wr.close();
		br.close();
	}

	static long fun(long[] A, long K) {
		int cnt1 = 0;
		int cnt2 = 0;
		int cnt3 = 0;

		List<Long> list = new ArrayList<>();

		int arrSize = A.length;

		for (int startPoint = 0; startPoint < arrSize; startPoint++) {

			for (int grps = startPoint; grps <= arrSize; grps++) {
				for (int j = startPoint; j < grps; j++) {
					list.add(A[j]);
				}
				Long xor = getXor(list);
				if (xor < K) {
					cnt1++;
				} else if (xor == K) {
					cnt2++;
				} else if (xor > K) {
					cnt3++;
				}
			}
		}
		return getFinalCalculatedValue(cnt1, cnt2, cnt3);
	}

	public static int getFinalCalculatedValue(int cnt1, int cnt2, int cnt3) {
		int value = 0;
		value = (int) (Math.pow((cnt1 + cnt2), 2) + Math.pow((cnt2 + cnt3), 2) + Math.pow((cnt3 + cnt1), 2)
				- (Math.pow(cnt1, 2) + Math.pow(cnt2, 2) + Math.pow(cnt3, 2)));
		return value;
	}

	public static long getXor(List<Long> list) {
		Long res = (long) 0;
		for (int k = 0; k < list.size(); k++)
			res = res ^ list.get(k);
		return res;
	}
}
