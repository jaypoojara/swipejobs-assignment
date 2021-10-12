import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from '../../components/atoms/Header';
import { selectUser } from '../JobMatchScreen/selectors';
import T from '../../components/atoms/T';
import styles from './styles';

const ProfileScreen = ({ user }) => {
  return (
    <View style={styles.container}>
      <Header fromProfile={true} name={`${user.firstName} ${user.lastName}`} />
      <View style={styles.M20}>
        <T style={styles.titleText} id="firstName" />
        <T style={styles.detailText} text={user.firstName} />
        <View style={styles.MT10}>
          <T style={styles.titleText} id="lastName" />
          <T style={styles.detailText} text={user.lastName} />
        </View>
        <View style={styles.MT10}>
          <T style={styles.titleText} id="address" />
          <T style={styles.detailText} text={user.address?.formattedAddress} />
        </View>
        <View style={styles.MT10}>
          <T style={styles.titleText} id="job_distance" />
          <T
            style={styles.detailText}
            text={`${user.maxJobDistance.toFixed(2)} miles`}
          />
        </View>
        <View style={styles.MT10}>
          <T style={styles.titleText} id="phone_number" />
          <T style={styles.detailText} text={user.phoneNumber} />
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser()
});
export default connect(mapStateToProps, null)(ProfileScreen);
