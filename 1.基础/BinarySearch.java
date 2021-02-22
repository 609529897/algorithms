import java.utils.Arrays;

public class BinarySearch {
    public static int rank(int key, int[] a) {
        int lo = 0;
        int hi = a.length - 1;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (key < a[mid])  hi = mid - 1;
            else if (key > a[mid]) hi = mid + 1;
            else return mid;
        }

        return -1
    }

    private static void main(String[] args) {
        int[] whitelist = In.readInts(args[0])

        Arrays.sort(whitelist)

        while (!StdIn.isEmpty()) {
            int key = StdIn.readInts();

            if (rank(key, whitelist) == -1) {
                StdOut.println(key);
            }
        }
    }
}