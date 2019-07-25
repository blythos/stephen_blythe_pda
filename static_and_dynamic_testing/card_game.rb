### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

class CardGame
  
  def checkforAce(card)
    if card.value == 1
      return true
    else
      return false
    end
  end

# We're going to assume aces are low for the sake of simplicty.
  def highest_card(card1, card2)
    if card1.value > card2.value
      return card1
    else
      return card2
    end
  end

# We're going to assume this is just counting the overall value of the cards added together, rather than how many cards you have in your "hand."
  def cards_total(cards)
    total = 0
    for card in cards
      total += card.value
    end
    return "You have a total of " + total.to_s
  end

end
