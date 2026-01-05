import { User, LoginCredentials, RegisterData } from '@/types/auth';

export const MOCK_USERS: User[] = [
    {
        id: '1',
        email: 'superadmin@ticketbhandar.com',
        name: 'Super Admin',
        role: 'super-admin',
        avatar: '👨‍💼',
        phone: '+977-9841234567',
        createdAt: '2024-01-01',
        isActive: true,
    },
    {
        id: '2',
        email: 'admin@ticketbhandar.com',
        name: 'Admin User',
        role: 'admin',
        avatar: '👩‍💼',
        phone: '+977-9841234568',
        createdAt: '2024-01-15',
        isActive: true,
    },
    {
        id: '3',
        email: 'agent@ticketbhandar.com',
        name: 'Travel Agent',
        role: 'agent',
        avatar: '👨‍✈️',
        phone: '+977-9841234569',
        createdAt: '2024-02-01',
        isActive: true,
    },
    {
        id: '4',
        email: 'user@example.com',
        name: 'John Doe',
        role: 'user',
        avatar: '👤',
        phone: '+977-9841234570',
        createdAt: '2024-02-15',
        isActive: true,
    },
];

export const MOCK_PASSWORD = 'password123';

export class MockAuthService {
    static async login(credentials: LoginCredentials): Promise<User> {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const user = MOCK_USERS.find(u => u.email === credentials.email);

        if (!user) {
            throw new Error('User not found');
        }

        if (credentials.password !== MOCK_PASSWORD) {
            throw new Error('Invalid password');
        }

        // Store in localStorage (mock session)
        localStorage.setItem('currentUser', JSON.stringify(user));

        return user;
    }

    static async register(data: RegisterData): Promise<User> {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (data.password !== data.confirmPassword) {
            throw new Error('Passwords do not match');
        }

        // Check if user exists
        const existingUser = MOCK_USERS.find(u => u.email === data.email);
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Create new user
        const newUser: User = {
            id: String(MOCK_USERS.length + 1),
            email: data.email,
            name: data.name,
            role: 'user',
            phone: data.phone,
            createdAt: new Date().toISOString(),
            isActive: true,
        };

        MOCK_USERS.push(newUser);
        localStorage.setItem('currentUser', JSON.stringify(newUser));

        return newUser;
    }

    static async logout(): Promise<void> {
        await new Promise(resolve => setTimeout(resolve, 500));
        localStorage.removeItem('currentUser');
    }

    static getCurrentUser(): User | null {
        const userStr = localStorage.getItem('currentUser');
        if (!userStr) return null;
        return JSON.parse(userStr);
    }

    static isAuthenticated(): boolean {
        return !!this.getCurrentUser();
    }
}

