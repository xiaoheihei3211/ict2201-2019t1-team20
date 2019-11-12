//Test Case 1
testDisplay(){
  bool testD = displayRedeemedReward("");
  return testD
  <!-- False Result Will Be Returned Because User Has No Reward-->
}


//Test Case 2
testValid(){
  bool testV = validateUserReward("Bronze", 1500);
  return testV
  <!-- True Result Will Be Returned Because User Has The Right Tier And Sufficient Points-->

}

//Test Case 3
testValid(){
  bool testV = validateUserReward("Gold", 4500);
  return testV
  <!-- False Result Will Be Returned Because User Does Not Have Right Tier-->
}

//Test Case 4
testValid(){
  bool testV = validateUserReward("Gold", 1500);
  return testV
  <!-- True Result Will Be Returned Because User Has The Right Tier And Sufficient Points-->
}


//Test Case 5
testRedeem(){
  bool testV = redeemReward(4500);
  return testV
  <!-- False Result Will Be Returned Because User Does Not Have Sufficient Points-->
}
