### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame

  def checkforAce(card)
    # Should be ==, not just =
    if card.value = 1
      return true
    else
      return false
    end
  end

# dif should be def, and there should be a comma between the two arguments. Lack of proper indentation makes the code difficult to read, which has likely been caused by not using def properly.
  dif highest_card(card1 card2)
  #Technically, an ace is a higher value card than a 2 or above, so the below code doesn't check for this and is therefore incorrect. It also doesn't check for the event in which two cards have the same value.
  if card1.value > card2.value
    # card should be card1
    return card
  else
    return card2
  end
end

# This end should be at the very bottom of the code. Currently it cuts out the below total_cards method from the class.
end

# Don't need "self." in the function name.
def self.cards_total(cards)
  # Total requires a value to be initialised.
  total
  for card in cards
    # Are we supposed to be counting the number of cards, or the total value of the cards here? I suspect we shouldn't be using .value if the former.
    total += card.value
    #Return should be before the final end.
    return "You have a total of" + total
  end
end
```
