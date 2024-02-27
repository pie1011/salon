'use client'
import RefreshButton from './refresh-button'

export default function Appointments() {
  const users = [
    { id: 1, firstName: 'John', email: 'email'  },
    { id: 2, firstName: 'Jane', email: 'email2' }
  ]
  const duration = 1000

  return (
    <main className="flex justify-center items-start h-screen pt-5">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user: any) => (
          <div
            key={user.id} // Add key prop with a unique value
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{user.firstName}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}