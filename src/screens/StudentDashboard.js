import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export default function StudentDashboard() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Top Banner */}
            <View style={styles.bannerContainer}>

                <Image style={styles.banner}
                    source={require('../assets/images/logo.jpeg')} />

            </View>

            {/* Quick Access */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quick Access</Text>
                <View style={styles.quickGrid}>
                    <QuickItem icon="book-outline" text="All Courses" />
                    <QuickItem icon="clipboard-outline" text="Test Series" />
                    <QuickItem icon="newspaper-outline" text="Current Affairs" />
                    <QuickItem icon="calendar-outline" text="Live Batches" />
                    <QuickItem icon="videocam-outline" text="Recorded Batches" />
                    <QuickItem icon="document-text-outline" text="Daily Quiz" />
                    <QuickItem icon="cloud-download-outline" text="Downloads" />
                    <QuickItem icon="chatbubble-ellipses-outline" text="Enquiry" />
                </View>
            </View>

            {/* New on KGS */}
            <View style={styles.section}>
                <HeaderRow title="New on Divine" />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <CourseCard title="Class 10th NEET JEE" image="https://via.placeholder.com/300x150?text=Class+10+NEET+JEE" />
                    <CourseCard title="Class 11th Batch" image="https://via.placeholder.com/300x150?text=Class+11+Batch" />
                </ScrollView>
            </View>

            {/* Popular Courses */}
            <View style={styles.section}>
                <HeaderRow title="Popular Courses" />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <PopularCourse
                        title="NEET 2026 Repeater Batch"
                        subtitle="Prayagraj Offline Bilingual"
                        price="₹29999"
                        image="https://via.placeholder.com/300x150?text=NEET+2026+Repeater"
                    />
                    <PopularCourse
                        title="JEE 2027 Batch-II"
                        subtitle="Mussalhapur Hat Bilingual"
                        price="₹29999"
                        image="https://via.placeholder.com/300x150?text=JEE+2027+Batch"
                    />
                </ScrollView>
            </View>

            {/* Free Videos */}
            <View style={styles.section}>
                <HeaderRow title="Free Video" />
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <FreeVideoCard
                        title="Khan Sir से सुनो Kota का हाल"
                        date="Jan 23, 2025"
                        image="https://via.placeholder.com/250x140?text=Free+Video+1"
                    />
                    <FreeVideoCard
                        title="Launching Prayagraj for NEET & JEE"
                        date="Jan 23, 2025"
                        image="https://via.placeholder.com/250x140?text=Free+Video+2"
                    />
                </ScrollView>
            </View>

            <View style={{ height: 80 }} />
        </ScrollView>
    );
}

const QuickItem = ({ icon, text }) => (
    <TouchableOpacity style={styles.quickItem}>
        {/* <Ionicons name={icon} size={28} color="#4b0f93ff" /> */}
        <Icon name="person-add" size={30} color="#4b0f93ff" style={{ marginRight: 8 }} />
        <Text style={styles.quickText}>{text}</Text>
    </TouchableOpacity>
);

const HeaderRow = ({ title }) => (
    <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
    </View>
);

const CourseCard = ({ image, title }) => (
    <TouchableOpacity style={styles.courseCard}>
        <Image source={{ uri: image }} style={styles.courseImage} />
        <Text style={styles.courseText}>{title}</Text>
    </TouchableOpacity>
);

const PopularCourse = ({ image, title, subtitle, price }) => (
    <TouchableOpacity style={styles.popularCard}>
        <Image source={{ uri: image }} style={styles.courseImage} />
        <View style={styles.courseDetails}>
            <Text style={styles.popularTitle}>{title}</Text>
            <Text style={styles.popularSub}>{subtitle}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity style={styles.buyBtn}>
                <Text style={styles.buyText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);

const FreeVideoCard = ({ image, title, date }) => (
    <TouchableOpacity style={styles.videoCard}>
        <Image source={{ uri: image }} style={styles.videoImage} />
        <Text style={styles.videoTitle}>{title}</Text>
        <Text style={styles.videoDate}>{date}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F8F9FA' },
    bannerContainer: { width: '100%', height: 180 },
    banner: { width: '100%', height: '100%', resizeMode: 'cover' },
    section: { paddingHorizontal: 15, marginTop: 15 },
    sectionTitle: { fontSize: 18, fontWeight: '700', color: '#333' },
    quickGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 10 },
    quickItem: { width: '23%', alignItems: 'center', marginVertical: 10 },
    quickText: { fontSize: 12, color: '#555', marginTop: 5, textAlign: 'center' },
    headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
    seeAll: { color: '#4b0f93ff', fontWeight: '600' },
    courseCard: { backgroundColor: '#fff', width: width * 0.7, marginRight: 15, borderRadius: 10, overflow: 'hidden', elevation: 3 },
    courseImage: { width: '100%', height: 130 },
    courseText: { padding: 10, fontWeight: '600', color: '#333' },
    popularCard: { backgroundColor: '#fff', width: width * 0.7, marginRight: 15, borderRadius: 10, overflow: 'hidden', elevation: 3 },
    courseDetails: { padding: 10 },
    popularTitle: { fontWeight: '700', fontSize: 15, color: '#333' },
    popularSub: { color: '#666', fontSize: 13, marginTop: 4 },
    price: { color: '#4b0f93ff', fontWeight: 'bold', marginVertical: 6 },
    buyBtn: { backgroundColor: '#4b0f93ff', paddingVertical: 5, borderRadius: 6, alignItems: 'center' },
    buyText: { color: '#fff', fontWeight: '600' },
    videoCard: { backgroundColor: '#fff', width: width * 0.6, marginRight: 15, borderRadius: 10, elevation: 3, overflow: 'hidden' },
    videoImage: { width: '100%', height: 130 },
    videoTitle: { fontSize: 14, fontWeight: '600', color: '#333', padding: 8 },
    videoDate: { fontSize: 12, color: 'gray', paddingHorizontal: 8, paddingBottom: 8 },
});
