package cucumber.java;

import cucumber.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * User: PM
 * Date: 16/09/13
 * Time: 14:55
 */
@RunWith(Cucumber.class)
@Cucumber.Options(format={"pretty","html:target/cucumber"})
public class RunTests {
}
