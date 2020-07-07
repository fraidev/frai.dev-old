import styles from './Page.module.scss';
import React, { useRef, useEffect, ReactNode } from 'react';

type Props = {
  title?: string,
  children: ReactNode
};

const Page: React.FC<Props> = (props: Props) => {
  const pageRef = useRef<null | HTMLElement>(null) as React.MutableRefObject<HTMLInputElement>;;

  useEffect(() => {
    pageRef?.current?.scrollIntoView();
  });

  return (
    <div ref={pageRef} className={styles['page']}>
      <div className={styles['page__inner']}>
        {props.title && <h1 className={styles['page__title']}>{props.title}</h1>}
        <div className={styles['page__body']}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Page;