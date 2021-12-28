import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <ShoeFilterWrapper>
            <Select
              label="Sort"
              value={sortId}
              onChange={(ev) => setSortId(ev.target.value)}
            >
              <option value="newest">Newest Releases</option>
              <option value="price">Price</option>
            </Select>
          </ShoeFilterWrapper>
        </Header>

        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: row-reverse;
  gap: 32px;

  @media ${QUERIES.tabletAndDown} {
    flex-direction: column-reverse;
    gap: 0;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
  flex-basis: 248px;

  @media ${QUERIES.tabletAndDown} {
    flex-basis: unset;
  }
`;

const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
  margin-right: auto;
`;

const ShoeFilterWrapper = styled.div`
  @media ${QUERIES.mobileAndDown} {
    display: none;
  }
`;

export default ShoeIndex;
