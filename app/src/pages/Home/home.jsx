import WeatherView from '../../components/weather/weather';
import Youtube from '../../components/youtube/youtube';
import View from '../../components/preview/preview';
import Clothes from '../../components/clothes/clothes';
import Search from '../../components/search/search';
import * as S from './Home.style';

export default function Home() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <Search />
        <WeatherView />
        <Clothes />
        <View />
        <Youtube />
      </S.ContentWrapper>
    </S.Container>
  );
}
