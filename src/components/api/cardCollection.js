import { Pokedex } from 'pokeapi-js-wrapper';
import getRandomIds from '../api/getRandomIds';

const pokedex = new Pokedex();
const getIdsFromLevelInfo = (levelInfo) => {
  return getRandomIds(levelInfo);
};
const fetchCardsWithIds = async (ids) =>
  Promise.all(
    ids.map((id) => pokedex.getPokemonByName(id)),
  );
const fetchCards = async (levelInfo) => {
  const ids = getIdsFromLevelInfo(levelInfo);
  const cards = await fetchCardsWithIds(ids);
  return cards.map((card) => {
    return {
      img: card.sprites.other.dream_world.front_default,
      isClicked: false,
    };
  });
};
const cardCollection = {
  fetchCards,
};
export default cardCollection;
