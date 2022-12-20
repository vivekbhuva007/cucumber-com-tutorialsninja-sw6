$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("desktopstest.feature");
formatter.feature({
  "line": 2,
  "name": "Desktops Test",
  "description": "As user I want to arrange listing in alphabetical order and verify product added to shopping cart",
  "id": "desktops-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.before({
  "duration": 5322240800,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 5,
      "value": "#@smoke"
    }
  ],
  "line": 7,
  "name": "User can verify Product Arrange In Alphabetical Order",
  "description": "",
  "id": "desktops-test;user-can-verify-product-arrange-in-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I can Select Sort By position Name: Z to A",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify the Product will arrange in Descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 253720900,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 217926800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iCanSelectSortByPositionNameZToA()"
});
formatter.result({
  "duration": 5970591800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.verifyTheProductWillArrangeInDescendingOrder()"
});
formatter.result({
  "duration": 396361100,
  "error_message": "java.lang.AssertionError: Product not sorted into Z to A order: Lists differ at element [0]: Apple Cinema 30\" !\u003d Sony VAIO expected [Apple Cinema 30\"] but found [Sony VAIO]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:831)\r\n\tat com.tutorialsninja.steps.DesktopTestSteps.verifyTheProductWillArrangeInDescendingOrder(DesktopTestSteps.java:31)\r\n\tat ✽.Then Verify the Product will arrange in Descending order(desktopstest.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1339587900,
  "status": "passed"
});
formatter.before({
  "duration": 3337098900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User can verify Product Added To Shopping Cart SuccessFully",
  "description": "",
  "id": "desktops-test;user-can-verify-product-added-to-shopping-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I change currency to Pound Sterling",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Sort By position \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select product “HP LP3065”",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify the Text \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter Qty \"1” using Select class.",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Click on “Add to Cart” button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Verify the Message “Success: You have added HP LP3065 to your shopping cart!”",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Click on link “shopping cart” display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify the text \"Shopping Cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify the Product name \"HP LP3065\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Verify the Delivery Date \"2022-11-30\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Verify the Model \"Product21\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the Total \"£74.73\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "DesktopTestSteps.iChangeCurrencyToPoundSterling()"
});
formatter.result({
  "duration": 771183100,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 204243100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 25
    }
  ],
  "location": "DesktopTestSteps.selectSortByPosition(String)"
});
formatter.result({
  "duration": 1939733200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 21
    }
  ],
  "location": "DesktopTestSteps.selectProductHPLP(String)"
});
formatter.result({
  "duration": 1300576700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 17
    }
  ],
  "location": "DesktopTestSteps.verifyTheText()"
});
formatter.result({
  "duration": 345100,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.tutorialsninja.steps.DesktopTestSteps.verifyTheText() in file:/C:/Users/Vivek/IdeaProjects/cucumber-com-tutorialsninja-sw6/target/test-classes/\u0027 with pattern [^Verify the Text \"([^\"]*)\"$] is declared with 0 parameters. However, the gherkin step has 1 arguments [HP LP3065]. \nStep: And Verify the Text \"HP LP3065\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 22
    }
  ],
  "location": "DesktopTestSteps.selectDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 11
    }
  ],
  "location": "DesktopTestSteps.enterQtyUsingSelectClass()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 49
    }
  ],
  "location": "DesktopTestSteps.verifyTheMessageSuccessYouHaveAddedHPLPToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopTestSteps.clickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping Cart",
      "offset": 17
    }
  ],
  "location": "DesktopTestSteps.verifyTheTextInShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "HP LP3065",
      "offset": 25
    }
  ],
  "location": "DesktopTestSteps.verifyTheProductName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2022-11-30",
      "offset": 26
    }
  ],
  "location": "DesktopTestSteps.verifyTheDeliveryDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Product21",
      "offset": 18
    }
  ],
  "location": "DesktopTestSteps.verifyTheModel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "£74.73",
      "offset": 18
    }
  ],
  "location": "DesktopTestSteps.verifyTheTotal()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1095066300,
  "status": "passed"
});
});