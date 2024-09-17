import Link from 'next/link';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  leftButton: string;
  rightButton: string;
  path: string
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, leftButton, rightButton, path }) => {
  const renderPageNumbers = () => {
    const pages = [];

    const validCurrentPage = currentPage && currentPage > 0 ? currentPage : 1;

    // Always show the first page
    pages.push(
      <Link key={1} href={`/${path}?page=1`}>
        <span className={`px-2 ${validCurrentPage === 1 ? 'font-bold text-white bg-blue-500' : 'text-blue-500 hover:underline'}`}>
          1
        </span>
      </Link>
    );

    // Show ellipsis if more than 3 pages away from first page
    if (validCurrentPage > 3) pages.push(<span key="start-ellipsis">...</span>);

    // Show the page before the current page (if applicable)
    if (validCurrentPage > 2) {
      pages.push(
        <Link key={validCurrentPage - 1} href={`/${path}?page=${validCurrentPage - 1}`}>
          <span className="px-2 text-blue-500 hover:underline">
            {validCurrentPage - 1}
          </span>
        </Link>
      );
    }

    // Show the current page (only if it's not the first or last)
    if (validCurrentPage !== 1 && validCurrentPage !== totalPages) {
      pages.push(
        <span key={validCurrentPage} className="px-2 font-bold text-white bg-blue-500">
          {validCurrentPage}
        </span>
      );
    }

    // Show the page after the current page (if applicable)
    if (validCurrentPage < totalPages - 1) {
      pages.push(
        <Link key={validCurrentPage + 1} href={`/${path}?page=${validCurrentPage + 1}`}>
          <span className="px-2 text-blue-500 hover:underline">
            {validCurrentPage + 1}
          </span>
        </Link>
      );
    }

    // Show ellipsis if more than 3 pages away from last page
    if (validCurrentPage < totalPages - 2) pages.push(<span key="end-ellipsis">...</span>);

    // Always show the last page
    if (totalPages > 1) {
      pages.push(
        <Link key={totalPages} href={`/${path}?page=${totalPages}`}>
          <span className={`px-2 ${validCurrentPage === totalPages ? 'font-bold text-white bg-blue-500' : 'text-blue-500 hover:underline'}`}>
            {totalPages}
          </span>
        </Link>
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-col lg:items-end lg:justify-end items-center justify-center lg:mt-[60px] mt-[40px] text-cunstomGrayN500 text-regular lg:h-[32px] px-2">
      <div className="flex items-center gap-2">
        {/* Previous Button */}
        {currentPage > 1 ? (
          <Link href={`/${path}?page=${currentPage - 1}`}>
            <Image src={leftButton} alt="leftbutton" className="object-contain mx-auto" />
          </Link>
        ) : (
          <button disabled className="text-gray-400 cursor-not-allowed">
            <Image src={leftButton} alt="leftbutton" className="object-contain mx-auto opacity-50" />
          </button>
        )}

        {/* Page Numbers with Ellipses */}
        {renderPageNumbers()}

        {/* Next Button */}
        {currentPage < totalPages ? (
          <Link href={`/${path}?page=${currentPage + 1}`}>
            <Image src={rightButton} alt="rightbutton" className="object-contain mx-auto" />
          </Link>
        ) : (
          <button disabled className="text-gray-400 cursor-not-allowed">
            <Image src={rightButton} alt="rightbutton" className="object-contain mx-auto opacity-50" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
