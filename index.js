import {View, Platform, NativeModules, requireNativeComponent, StyleSheet} from 'react-native';
import React, {Component,} from 'react';
import PropTypes from 'prop-types'

const {SajjadBlurOverlay} = NativeModules;
var iface = {
    name: 'BlurView',
    propTypes: {
        ...View.propTypes,
        brightness: PropTypes.any,
        radius: PropTypes.number,
        downsampling: PropTypes.number,
        blurStyle: PropTypes.string,
        vibrant: PropTypes.bool,
    }
};
var RCTSajjadBlurOverlay = Platform.select({
  ios: () => requireNativeComponent('SajjadBlurOverlay', iface),
  android: () => requireNativeComponent('RCTSajjadBlurOverlay', iface),
})();
export default class BlurOverlay extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <RCTSajjadBlurOverlay {...this.props} style={[this.props.customStyles,styles.style]}>
            <View style={[this.props.customStyles,styles.style]}>
                {children}
            </View>
            </RCTSajjadBlurOverlay>
        );
    }
}

const styles = StyleSheet.create({
    style: {
        position: 'absolute',
        flex: 1,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        //  resizeMode: 'cover',
        width: null,
        height: null,
        zIndex: 999,
    },
});
