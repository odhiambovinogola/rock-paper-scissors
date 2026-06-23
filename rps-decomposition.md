# Rock Paper Scissors — Decomposition

**Players:** Human vs Computer

1. Create a list of choices: rock, paper, and scissors.
2. The computer picks a choice randomly while the human clicks a button to select a choice.
3. Determine round outcome:
   - Get computer's choice and human's choice
   - If they match → tie → both players get 0 points
   - If human's choice beats computer's → human wins round → human score + 1
   - Otherwise → computer wins round → computer score + 1
   - Display: what each player picked + who won the round (score count)
   - After updating scores → check if either score = 5 → if yes, display champion and end game
4. Reset the game to restart.
