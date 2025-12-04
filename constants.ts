import { Course, Testimonial, ChartDataPoint } from './types';

export const APP_NAME = "VRench";

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Heavy Machinery Basics',
    description: 'Learn to operate cranes and excavators without the risk of million-euro mistakes.',
    duration: '12 Hours',
    difficulty: 'Intermediate',
    category: 'Construction',
    price: 500,
    image: 'https://picsum.photos/400/250?grayscale',
    tags: ['Safety First', 'Certified', 'VR Hands-on']
  },
  {
    id: 'c2',
    title: 'Warehouse Forklift Ops',
    description: 'Master warehouse logistics and forklift maneuvering in tight spaces.',
    duration: '8 Hours',
    difficulty: 'Beginner',
    category: 'Warehouse',
    price: 500,
    image: 'https://picsum.photos/401/250?grayscale',
    tags: ['Logistics', 'Efficiency']
  },
  {
    id: 'c3',
    title: 'Residential Plumbing',
    description: 'Fix leaks, install pipes, and understand residential water systems virtually.',
    duration: '20 Hours',
    difficulty: 'Beginner',
    category: 'Plumbing',
    price: 500,
    image: 'https://picsum.photos/402/250?grayscale',
    tags: ['Trade Skill', 'Home Repair']
  },
  {
    id: 'c4',
    title: 'High-Voltage Electrical Safety',
    description: 'Advanced safety protocols for working with high-voltage industrial grids.',
    duration: '15 Hours',
    difficulty: 'Advanced',
    category: 'Electrical',
    price: 500,
    image: 'https://picsum.photos/403/250?grayscale',
    tags: ['High Risk', 'Safety Certified']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Darius',
    role: 'Crane Operator (15 Years)',
    quote: "If there was the ability to train how to handle a crane safely before even stepping in to a real one, everyone would sleep better.",
    avatar: 'https://picsum.photos/60/60?random=1'
  },
  {
    id: 't2',
    name: 'Karolis',
    role: 'Student',
    quote: "I would be interested to learn these skills with VR for basic knowledge without the high cost of trade school.",
    avatar: 'https://picsum.photos/60/60?random=2'
  },
  {
    id: 't3',
    name: 'Tadas',
    role: 'Equipment Operator',
    quote: "VR lets me perfect difficult operations safely. Mistakes on heavy machinery are dangerous and costly in real life.",
    avatar: 'https://picsum.photos/60/60?random=3'
  }
];

export const MOCK_PERFORMANCE_DATA: ChartDataPoint[] = [
  { name: 'Week 1', value: 20, secondary: 15 },
  { name: 'Week 2', value: 45, secondary: 30 },
  { name: 'Week 3', value: 60, secondary: 45 },
  { name: 'Week 4', value: 85, secondary: 70 },
];

export const SKILL_DISTRIBUTION: ChartDataPoint[] = [
  { name: 'Safety Protocol', value: 95 },
  { name: 'Precision', value: 82 },
  { name: 'Speed', value: 70 },
  { name: 'Knowledge', value: 88 },
];