import React from 'react'

import * as S from './style'

const testCard: React.FC = () => {
  return(
    <S.Container>
      <S.Box>
        <S.ImgBx>
          <S.Image src="https://ca.slack-edge.com/T0YHDBX2A-U4STA45C4-8e1787cfb1b1-512" />
        </S.ImgBx>
        <S.Content id="content">
          <S.ContentTitle>Fernando Casanova</S.ContentTitle>
          <S.ContentInfo>Gerente de desenvolvimento</S.ContentInfo>
        </S.Content>
      </S.Box>
      <S.Box>
        <S.ImgBx>
          <S.Image src="https://ca.slack-edge.com/T0YHDBX2A-U01NRQZSG8H-4766b9377026-512" />
        </S.ImgBx>
        <S.Content id="content2">
          <S.ContentTitle>João Macedo</S.ContentTitle>
          <S.ContentInfo>Full Stack Developer</S.ContentInfo>
        </S.Content>
      </S.Box>
      <S.Box>
        <S.ImgBx>
          <S.Image src="https://ca.slack-edge.com/T0YHDBX2A-U01941P2Z2R-df4baeee841f-512" />
        </S.ImgBx>
        <S.Content id="content3">
          <S.ContentTitle>Lucas Macedo</S.ContentTitle>
          <S.ContentInfo>Full Stack Developer</S.ContentInfo>
        </S.Content>
      </S.Box>
    </S.Container>
  )
}

export default testCard
