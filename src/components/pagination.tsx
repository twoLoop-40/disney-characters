import styled from "styled-components";
import { SetterOrUpdater } from "recoil";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top-width: 1px;
  padding-left: 1rem /** 16px */;
  padding-right: 1rem /** 16px */;
  @media (min-width: 640px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const ArrowBox = styled.div`
  margin-top: -1px;
  display: flex;
  width: 0px;
  flex: 1 1 0%;
`;

const LeftArrowBar = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-top-width: 2px;
  border-color: transparent;
  padding-right: 0.25rem /** 4px */;
  padding-top: 1rem /** 16px */;
  font-size: 0.875rem /** 14px */;
  line-height: 1.25rem /** 20px */;
  font-weight: 500;
  color: rgba(156, 163, 175, 1);
  &:hover {
    border-color: rgba(209, 213, 219, 1);
    color: rgba(243, 244, 246, 1);
  }
`;

const RightArrowBar = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-top-width: 2px;
  border-color: transparent;
  padding-left: 0.25rem /** 4px */;
  padding-top: 1rem /** 16px */;
  font-size: 0.875rem /** 14px */;
  line-height: 1.25rem /** 20px */;
  font-weight: 500;
  color: rgba(156, 163, 175, 1);
  &:hover {
    border-color: rgba(209, 213, 219, 1);
    color: rgba(243, 244, 246, 1);
  }
`;

const PageBox = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin-top: -1px;
    display: flex;
    margin-left: 0.5rem /** 8px */;
  }
`;

const PageBar = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  border-top-width: 2px;
  border-color: transparent;
  padding-left: 1rem /** 16px */;
  padding-right: 1rem /** 16px */;
  padding-top: 1rem /** 16px */;
  font-size: 0.875rem /** 14px */;
  line-height: 1.25rem /** 20px */;
  font-weight: 500;
  color: rgba(156, 163, 175, 1);
  &:hover {
    border-color: rgba(209, 213, 219, 1);
    color: rgba(243, 244, 246, 1);
  }
`;

const PageBarActive = styled.a`
  display: inline-flex;
  align-items: center;
  border-top-width: 2px;
  border-color: rgba(99, 102, 241, 1);
  padding-left: 1rem /** 16px */;
  padding-right: 1rem /** 16px */;
  padding-top: 1rem /** 16px */;
  font-size: 0.875rem /** 14px */;
  line-height: 1.25rem /** 20px */;
  font-weight: 500;
  color: rgba(79, 70, 229, 1);
`;

interface PagiNationProps {
  page: number;
  setPage: SetterOrUpdater<number>;
  rangeForPage: (page: number) => number[] | undefined;
  lastPage: number;
}

function PagiNation({
  page,
  setPage,
  rangeForPage,
  lastPage
}: PagiNationProps) {
  const onLeftArrowClick = () => {
    const pageCount = rangeForPage(page)?.length;
    if (pageCount && page - pageCount > 0) {
      setPage(page - pageCount);
    }
  };
  const onRightArrowClick = () => {
    const pageCount = rangeForPage(page)?.length;
    if (pageCount && page + pageCount <= lastPage) {
      setPage(page + pageCount);
    }
  };
  return (
    <Nav>
      <ArrowBox onClick={onLeftArrowClick}>
        <LeftArrowBar>&larr;</LeftArrowBar>
      </ArrowBox>
      <PageBox>
        {rangeForPage(page)?.map((pageNum) => {
          return pageNum === page ? (
            <PageBarActive key={pageNum}>{pageNum}</PageBarActive>
          ) : (
            <PageBar key={pageNum} onClick={() => setPage(pageNum)}>
              {pageNum}
            </PageBar>
          );
        })}
      </PageBox>
      <ArrowBox onClick={onRightArrowClick}>
        <RightArrowBar>&rarr;</RightArrowBar>
      </ArrowBox>
    </Nav>
  );
}

export default PagiNation;
