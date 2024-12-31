type BaseResult = {
  estimatedTotalHits: number;
  limit: number;
  offset: number;
  query: string;
};

type ResultJob = {
  indexUid: 'job';
  hits: JobSearching[];
} & BaseResult;

type ResultArticle = {
  indexUid: 'article';
  hits: ArticleSearching[];
} & BaseResult;

type Results = ResultJob | ResultArticle;

type ResponseSearching = {
  results: Results[];
};
