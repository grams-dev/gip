import React, {
  lazy,
  Suspense
} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import Layout from '@theme/Layout';

import styles from './index.module.css';


export default function gip() {
  const location = useLocation();
  console.log(`@site/docs/GIP-${location.hash.substring(1)}.md`)
  const GIPDoc = lazy(() => import(`@site/docs/GIP-${location.hash.substring(1)}.md`));
  //import(`@site/docs/GIP-${location.hash.substring(1)}`);
  return (
    <Layout
      title={`All`}
      description="all GIPs">
      <main>
        <div className={clsx(styles.content)}>
          <Suspense fallback={<div>Loading...</div>}>
            <GIPDoc />
          </Suspense>
        </div>
      </main>
    </Layout>
  );
}
