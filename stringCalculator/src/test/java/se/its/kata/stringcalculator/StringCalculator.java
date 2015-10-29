package se.its.kata.stringcalculator;

public class StringCalculator {
	
	public int add(String numbers) {
		String delimiter = "[,\n]";
		if (numbers.isEmpty())
			return 0;
		if (hasNewDelimiter(numbers)) {
			delimiter = parseDelimiter(numbers);
			numbers = removeDelimiterLine(numbers);
		}
		return add(numbers.split(delimiter));
	}

	private String removeDelimiterLine(String numbers) {
		return numbers.substring(4);
	}

	private String parseDelimiter(String numbers) {
		return "[" + numbers.substring(2, 3) + "\n]";
	}

	private boolean hasNewDelimiter(String numbers) {
		return numbers.startsWith("//");
	}

	private Integer parseNumber(String numbers) {
		return Integer.valueOf(numbers);
	}

	private int add(String[] split) {
		throwOnNegativeNumbers(split);
		return addReduce(split);
	}

	private int addReduce(String[] split) {
		int sum = 0;
		for(String number:split) {
			Integer intNum = parseNumber(number);
			sum += intNum;
		}
		return sum;
	}

	private void throwOnNegativeNumbers(String[] split) {
		String invalidNumbers = "";
		for(String number:split) {
			Integer intNum = parseNumber(number);
			if (intNum < 0)
				invalidNumbers += intNum + ",";
		}
		if (!invalidNumbers.isEmpty())
			throw new IllegalArgumentException("negatives not allowed " + invalidNumbers.substring(0,invalidNumbers.length()-1));
	}

}
