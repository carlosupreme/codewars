// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

class PersistBugger {
  public static int persistence(long n) {
    int i = 0;

    while (n > 9) {
      int tmp = 1;
      String[] chars = ("" + n).split("");
      int[] numbers = new int[chars.length];

      for (int j = 0; j < chars.length; j++) numbers[j] = Integer.parseInt(chars[j]);
      for(int num : numbers) tmp *= num;
      
      i++;
      n = tmp;
    }

    return i;
	}

  public static void main(String[] args) {
    System.out.println(persistence(39) + " " + 3);
    System.out.println(persistence(999) + " " + 4);
    System.out.println(persistence(4) + " " + 0);
  }
}