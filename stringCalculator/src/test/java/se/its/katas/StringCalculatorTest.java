/**
 * Implementation of Roy Osheroves string calculator kata
 * @see http://osherove.com/tdd-kata-1/ 
 */
package se.jonananas.tdd.stringCalculator;


import static org.assertj.core.api.Assertions.assertThat;

import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.Test;


public class StringCalculatorTest {
	
	private StringCalculator stringCalculator;

	@Before
	public void setup() {
		stringCalculator = new StringCalculator();
	}
	
	@Test
	public void shouldReturnZeroOnEmptyString() throws Exception {
		assertThatResultIs("", 0);
	}

	@Test
	public void shouldAddSingleNumber() throws Exception {
		assertThatResultIs("1", 1);
		assertThatResultIs("2", 2);
	}

	@Test
	public void shouldAddTwoNumbers() throws Exception {
		assertThatResultIs("1,2", 3);
	}

	@Test
	public void shouldAddFiveNumbers() throws Exception {
		assertThatResultIs("1,1,1,2,2", 7);
	}

	@Test
	public void shouldAllowNewLines() throws Exception {
		assertThatResultIs("1\n2,3", 6);
	}
	
	@Test
	public void shouldAllowChangedDelimiter() throws Exception {
		assertThatResultIs("//;\n1;2", 3);
	}

	@Test
	public void shouldAllowChangedDelimiterAndNewline() throws Exception {
		assertThatResultIs("//;\n1\n2", 3);
	}

	@Test
	public void shouldThrowOnNegative() throws Exception {
		assertThatThrowsWithMessage("-1", "negatives not allowed -1");
		assertThatThrowsWithMessage("-2", "negatives not allowed -2");
	}
	
	@Test
	public void shouldThrowAndReturnAllNegatives() throws Exception {
		assertThatThrowsWithMessage("-1,-2", "negatives not allowed -1,-2");
	}

	private void assertThatThrowsWithMessage(String numbers, final String expected) {
		String message = "";
		try {
			stringCalculator.add(numbers);
		} catch (IllegalArgumentException ex) {
			message = ex.getMessage();
		}
		assertThat(message).isEqualTo(expected);
	}

	private void assertThatResultIs(final String numbers, final int expected) {
		int result = stringCalculator.add(numbers);
		assertThat(result).isEqualTo(expected);
	}
	
}
