import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import colors from '../../../themes/colors';
import T from '../../atoms/T';
import ButtonComponent from '../../atoms/Button';
import { getDuration } from '../../../utils/functionUtils';
import styles from './styles';

const JobDetails = ({ item: jobDetails, acceptRejectJobs }) => (
  <View style={styles.container}>
    <View style={styles.scrollContainerWrapper}>
      <ScrollView style={styles.border}>
        <View style={styles.itemContainer}>
          <Image
            style={styles.image}
            source={{
              uri: jobDetails.jobTitle.imageUrl
            }}
          />
          <View style={styles.companyContainer}>
            <T style={styles.jobTitleText} text={jobDetails.jobTitle.name} />
            <T style={styles.companyNameText} text={jobDetails.company.name} />
          </View>
          <View style={styles.distanceContainer}>
            <View>
              <T style={styles.distanceText} id="distance" />
              <T
                style={styles.milesText}
                text={`${jobDetails.milesToTravel.toFixed(2)} miles`}
              />
            </View>
            <View>
              <T style={styles.hourlyRateText} id="hourly_text" />
              <View style={styles.dollarContainer}>
                <T style={styles.dollarText} text="$ " />
                <T
                  style={styles.priceText}
                  text={`${(jobDetails.wagePerHourInCents / 100).toFixed(2)}`}
                />
              </View>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View>
              <FontAwesome5 name="calendar-alt" size={24} color="black" />
            </View>
            <View style={styles.ML}>
              <T id="shift_text" style={styles.detailText} />
              {jobDetails.shifts.length > 0 &&
                jobDetails.shifts.map((shift, index) => (
                  <T
                    key={`${shift.startDate}-${shift.endDate}-${index}`}
                    style={styles.slotText}
                    text={`${getDuration(
                      shift.startDate,
                      shift.endDate
                    ).toUpperCase()}`}
                  />
                ))}
            </View>
          </View>

          <View style={styles.detailContainer}>
            <View>
              <FontAwesome5 name="location-arrow" size={24} color="black" />
            </View>
            <View style={styles.ML}>
              <T id="location" style={styles.detailText} />
              <T
                style={styles.extraLarge}
                text={`${jobDetails.company.address.formattedAddress}`}
              />
              <T
                text={`${jobDetails.milesToTravel.toFixed(
                  2
                )} miles from your job search location`}
                style={styles.helperText}
              />
            </View>
            <View style={styles.ML10}>
              <FontAwesome5 name="chevron-right" size={24} color="black" />
            </View>
          </View>
          {jobDetails.requirements && jobDetails.requirements?.length > 0 && (
            <View style={styles.detailContainer}>
              <View>
                <FontAwesome5 name="hammer" size={24} color="black" />
              </View>
              <View style={styles.ML}>
                <T id="requirement" style={styles.detailText} />
                {jobDetails.requirements.map((requirement, index) => (
                  <T
                    key={`${index}-${requirement}`}
                    style={styles.extraLarge}
                    text={`- ${requirement}`}
                  />
                ))}
              </View>
            </View>
          )}

          <View style={styles.detailContainer}>
            <View>
              <FontAwesome5 name="user-circle" size={24} color="black" />
            </View>
            <View style={styles.ML}>
              <T id="report_to" style={styles.detailText} />
              <T
                style={styles.extraLarge}
                text={`${jobDetails.company.reportTo.name} ${
                  jobDetails.company.reportTo.phone
                    ? jobDetails.company.reportTo.phone
                    : ''
                }`}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          testID="no-thanks-button"
          mode="outlined"
          color={colors.off_white}
          textColor={colors.off_white}
          onPress={() => acceptRejectJobs(false, jobDetails)}
          messageId="no_thanks"
        />
        <ButtonComponent
          mode="contained"
          color={colors.black}
          textColor={colors.white}
          onPress={() => acceptRejectJobs(true, jobDetails)}
          messageId="take_it"
        />
      </View>
    </View>
  </View>
);
JobDetails.propTypes = {
  item: PropTypes.object,
  acceptRejectJobs: PropTypes.func
};
export default JobDetails;
