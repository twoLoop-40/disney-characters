export type CharacterOverAll = {
  id: string;
  name: string;
  imageUrl: string;
};

export type CharacterDetail = CharacterOverAll & {
  films: string[];
  sourceUrl: string;
};

export type Result<T> = {
  ok: boolean;
  result?: T;
};

async function getCharacter<T extends CharacterOverAll[] | CharacterDetail>(
  id?: string,
  result?: T
) {
  const apiAddress = "https://disney_api.nomadcoders.workers.dev/characters";
  const fetcher = async (id?: string): Promise<Result<T>> => {
    try {
      const responseData = id
        ? fetch(`${apiAddress}/${id}`)
        : fetch(apiAddress);
      const result = await responseData.then((response) => response.json());
      return getCharacter<T>(id, result);
    } catch (err) {
      console.log(err);
      return { ok: false };
    }
  };
  if (result) {
    return { ok: true, result };
  }

  return fetcher(id);
}

export default getCharacter;
