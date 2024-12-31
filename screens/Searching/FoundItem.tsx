// import { SEARCHING_PAGE_PATH } from '@/configs/searching'; using this const to check page has keyword

import { paths } from '@/app/router';
import { Link } from '@/i18n/routing';

const ListJob = ({ data }: { data: JobSearching[] }) => {
  return (
    <div className="flex flex-col">
      {data.map(item => (
        <div key={item.id} className="py-3 border-b border-gray-400">
          <Link
            href={`${paths.careers.root}/${item.documentId}`}
            className="heading-4 text-gray-800 hover:text-jungle hover:underline max-sm:text-sm"
          >
            {item.jobName}
          </Link>
          <p className="text-sm text-gray-500 max-sm:text-xs mt-2">{item.startDate}</p>
        </div>
      ))}
    </div>
  );
};

const ListArticle = ({ data }: { data: ArticleSearching[] }) => {
  return (
    <div className="flex flex-col">
      {data.map(item => (
        <div key={item.id} className="py-3 border-b border-gray-400">
          <Link
            href={`${paths.resources['news-and-events']}/${item.documentId}`}
            className="heading-4 text-gray-800 hover:text-jungle hover:underline max-sm:text-sm"
          >
            {item.title}
          </Link>
          <p className="text-sm text-gray-500 max-sm:text-xs mt-2">{item.publishedAt.substring(0, 10)}</p>
        </div>
      ))}
    </div>
  );
};

const FoundItem = ({ indexUid, hits }: Results) => {
  if (indexUid === 'article') return <ListArticle data={hits} />;
  if (indexUid === 'job') return <ListJob data={hits} />;
};

export default FoundItem;
