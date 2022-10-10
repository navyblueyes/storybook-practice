import styled from 'styled-components'

import { PageTemplate } from '../../templates/PageTemplate'
import { categories } from '../../stub/categories'

import { RestaurantsSection } from './components/RestaurantsSection/RestaurantsSection'
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
import { Banner } from './components/Banner'
import { AwardWinningSection } from './components/AwardWinningSection'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const HomePage = () => {
  return (
    <PageTemplate>
      <Banner />
      <Spacing />
      <RestaurantsSection title="Local Favorite Restaurants" />
      <Spacing />
      <AwardWinningSection />
      <Spacing />
      <CategoriesSection categories={categories} />
      <Spacing />
    </PageTemplate>
  )
}
