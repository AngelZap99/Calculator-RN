import {FC} from 'react';

import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Separator from './Separator';

interface Props {
  result: string;
  pastResult: string;
  operator: string;
}

const Results: FC<Props> = ({result, pastResult, operator}) => {
  return (
    <>
      <Text
        style={styles.pastResultText}
        numberOfLines={1}
        adjustsFontSizeToFit>
        {pastResult} {operator}
      </Text>
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
      <Separator />
    </>
  );
};

export default Results;

const styles = StyleSheet.create({
  pastResultText: {
    color: 'white',
    fontSize: 35,
    textAlign: 'right',
    opacity: 0.8,
  },
  resultText: {
    color: 'white',
    fontSize: 45,
    textAlign: 'right',
  },
});
