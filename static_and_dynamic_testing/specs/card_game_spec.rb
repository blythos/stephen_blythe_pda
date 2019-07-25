require("minitest/autorun")
require("minitest/rg")
require_relative("../card_game")
require_relative("../card")

class CardGameTest < MiniTest::Test

  def setup()
    @game = CardGame.new()
    @ace_of_spades = Card.new("Spades", 1)
    @three_of_hearts = Card.new("Hearts", 3)
    @cards = [@ace_of_spades, @three_of_hearts]
  end

  def test_check_for_ace__is_ace()
    assert_equal(true, @game.checkforAce(@ace_of_spades))
  end

  def test_check_for_ace__is_not_ace()
    assert_equal(false, @game.checkforAce(@three_of_hearts))
  end

  def test_check_highest_value()
    assert_equal(@three_of_hearts, @game.highest_card(@ace_of_spades, @three_of_hearts))
  end

  def test_cards_total()
    assert_equal("You have a total of 4", @game.cards_total(@cards))
  end

end
