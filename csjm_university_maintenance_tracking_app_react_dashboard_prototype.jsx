export default function MaintenanceTrackingApp() {
  const loginCredentials = [
    {
      role: 'Admin',
      userId: 'admin_csjmu',
      password: 'Admin@123',
    },
    {
      role: 'Maintenance Worker',
      userId: 'worker_csjmu',
      password: 'Worker@123',
    },
    {
      role: 'Faculty / Student',
      userId: 'user_csjmu',
      password: 'User@123',
    },
  ];
  const complaintWorkflow = [
    'User raises complaint through portal',
    'System generates unique ticket number automatically',
    'Admin reviews complaint category and priority',
    'Admin assigns available maintenance worker/team',
    'Worker updates task status with progress',
    'Admin verifies work completion',
    'Ticket closes after final approval',
  ];
  const departments = [
    { name: 'Carpentry', icon: '🪚', color: 'bg-amber-100' },
    { name: 'Electrical', icon: '⚡', color: 'bg-yellow-100' },
    { name: 'Plumbing', icon: '🚰', color: 'bg-cyan-100' },
    { name: 'Mechanical', icon: '⚙️', color: 'bg-gray-100' },
    { name: 'R.O / AC Maintenance', icon: '❄️', color: 'bg-blue-100' },
    { name: 'Cleaning', icon: '🧹', color: 'bg-green-100' },
    { name: 'Horticulture', icon: '🌿', color: 'bg-lime-100' },
  ];

  const predefinedComplaints = [
    'Electrical Failure',
    'Water Leakage',
    'Broken Furniture',
    'AC Not Working',
    'Cleaning Required',
    'Garden Maintenance',
    'Drainage Issue',
    'R.O Water Problem',
  ];

  const workers = [
    { name: 'Rakesh Kumar', department: 'Electrical', availability: 'Available' },
    { name: 'Amit Verma', department: 'Plumbing', availability: 'Busy' },
    { name: 'Sanjay Singh', department: 'Cleaning', availability: 'Available' },
  ];

  const requests = [
    {
      id: 'MT-001',
      department: 'Electrical',
      issue: 'Classroom lights not working',
      location: 'Block A – Room 204',
      status: 'In Progress',
      priority: 'High',
    },
    {
      id: 'MT-002',
      department: 'Plumbing',
      issue: 'Water leakage near washroom',
      location: 'Admin Building',
      status: 'Pending',
      priority: 'Medium',
    },
    {
      id: 'MT-003',
      department: 'Cleaning',
      issue: 'Daily cleaning request',
      location: 'Seminar Hall',
      status: 'Completed',
      priority: 'Low',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="bg-white rounded-3xl shadow-sm p-8 border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-3">
                CSJMU Maintenance Login Portal
              </h2>
              <p className="text-slate-500 mb-6">
                Secure login for Admin, Faculty, Students, and Maintenance Staff.
              </p>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="User ID"
                  className="w-full border border-slate-300 rounded-2xl px-4 py-3"
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-slate-300 rounded-2xl px-4 py-3"
                />

                <button className="w-full bg-red-800 text-white py-3 rounded-2xl font-medium">
                  Login to Dashboard
                </button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-5">
                Demo Login Credentials
              </h3>

              <div className="space-y-4">
                {loginCredentials.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-slate-200 p-4">
                    <p className="font-semibold text-slate-800">{item.role}</p>
                    <p className="text-sm text-slate-500 mt-2">User ID: {item.userId}</p>
                    <p className="text-sm text-slate-500">Password: {item.password}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-3xl shadow-sm p-8 border border-red-900 text-white">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="uppercase tracking-widest text-sm opacity-80">
                Chhatrapati Shahu Ji Maharaj University
              </p>
              <h1 className="text-4xl font-bold mt-2">
                CSJMU Maintenance Monitoring Dashboard
              </h1>
              <p className="mt-2 text-red-100 text-base">
                Centralized campus complaint, ticket, and workforce management system.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md border border-white/20 text-center min-w-[180px]">
              <p className="text-sm text-red-100">Today Complaints</p>
              <h2 className="text-4xl font-bold mt-2">24</h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-slate-800">
                CSJM University Maintenance Tracking
              </h1>
              <p className="text-slate-500 mt-2 text-base">
                Manage campus maintenance requests across departments.
              </p>
            </div>

            <button className="bg-slate-900 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:opacity-90 transition">
              + Raise New Complaint
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-red-50 rounded-3xl p-6 shadow-sm border border-red-100">
            <p className="text-red-700 text-sm font-medium">Emergency Requests</p>
            <h2 className="text-3xl font-bold mt-2 text-red-900">12</h2>
            <p className="text-sm text-slate-500 mt-2">Requires immediate action</p>
          </div>

          <div className="bg-green-50 rounded-3xl p-6 shadow-sm border border-green-100">
            <p className="text-green-700 text-sm font-medium">Resolved Today</p>
            <h2 className="text-3xl font-bold mt-2 text-green-900">18</h2>
            <p className="text-sm text-slate-500 mt-2">Successfully closed tickets</p>
          </div>

          <div className="bg-blue-50 rounded-3xl p-6 shadow-sm border border-blue-100">
            <p className="text-blue-700 text-sm font-medium">Average Response Time</p>
            <h2 className="text-3xl font-bold mt-2 text-blue-900">2.4 Hr</h2>
            <p className="text-sm text-slate-500 mt-2">Ticket assignment efficiency</p>
          </div>

          <div className="bg-purple-50 rounded-3xl p-6 shadow-sm border border-purple-100">
            <p className="text-purple-700 text-sm font-medium">Active Workers</p>
            <h2 className="text-3xl font-bold mt-2 text-purple-900">32</h2>
            <p className="text-sm text-slate-500 mt-2">Currently handling maintenance tasks</p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm xl:col-span-2">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Maintenance Statistics Overview
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="text-sm text-slate-500">Open Tickets</p>
                <h3 className="text-3xl font-bold mt-2">48</h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="text-sm text-slate-500">Assigned Tickets</p>
                <h3 className="text-3xl font-bold mt-2">89</h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="text-sm text-slate-500">Pending Approval</p>
                <h3 className="text-3xl font-bold mt-2">15</h3>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="text-sm text-slate-500">Escalated Issues</p>
                <h3 className="text-3xl font-bold mt-2">5</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">
              Department Performance
            </h3>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Electrical</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-yellow-400 h-3 rounded-full w-[92%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Plumbing</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-cyan-400 h-3 rounded-full w-[85%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Cleaning</span>
                  <span>96%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-green-400 h-3 rounded-full w-[96%]" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Mechanical</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full w-[80%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">Total Requests</p>
            <h2 className="text-3xl font-bold mt-2">156</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">Pending</p>
            <h2 className="text-3xl font-bold mt-2">28</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">Completed</p>
            <h2 className="text-3xl font-bold mt-2">104</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <p className="text-slate-500 text-sm">Active Teams</p>
            <h2 className="text-3xl font-bold mt-2">7</h2>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Maintenance Departments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className={`rounded-3xl p-6 border border-slate-200 shadow-sm ${dept.color}`}
              >
                <div className="text-4xl mb-3">{dept.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {dept.name}
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Track and manage maintenance requests.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Recent Maintenance Requests
            </h2>

            <input
              type="text"
              placeholder="Search request..."
              className="border border-slate-300 rounded-2xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 text-sm">
                  <th className="pb-4">Ticket ID</th>
                  <th className="pb-4">Department</th>
                  <th className="pb-4">Issue</th>
                  <th className="pb-4">Location</th>
                  <th className="pb-4">Priority</th>
                  <th className="pb-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {requests.map((request, index) => (
                  <tr key={index} className="border-b border-slate-100">
                    <td className="py-4 font-medium">{request.id}</td>
                    <td className="py-4">{request.department}</td>
                    <td className="py-4">{request.issue}</td>
                    <td className="py-4">{request.location}</td>
                    <td className="py-4">{request.priority}</td>
                    <td className="py-4">
                      <span className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Admin Ticket Assignment Panel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {workers.map((worker, index) => (
              <div key={index} className="border border-slate-200 rounded-3xl p-5 bg-slate-50">
                <h3 className="font-semibold text-lg text-slate-800">
                  {worker.name}
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Department: {worker.department}
                </p>
                <p className="text-sm text-slate-500">
                  Availability: {worker.availability}
                </p>

                <button className="mt-4 w-full bg-slate-900 text-white py-2 rounded-2xl text-sm">
                  Assign Ticket
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Complaint Form</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Complaint Ticket ID (Auto Generated)"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 bg-slate-100"
                disabled
              />

              <input
                type="text"
                placeholder="Department"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
              />

              <input
                type="text"
                placeholder="Location"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
              />

              <select className="w-full border border-slate-300 rounded-2xl px-4 py-3 bg-white">
                <option>Select Predefined Complaint</option>
                {predefinedComplaints.map((complaint, index) => (
                  <option key={index}>{complaint}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Specific Location / Building / Room Number"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
              />

              <input
                type="file"
                className="w-full border border-slate-300 rounded-2xl px-4 py-3 bg-white"
              />

              <textarea
                placeholder="Additional Complaint Details / Any Other Issue"
                rows={4}
                className="w-full border border-slate-300 rounded-2xl px-4 py-3"
              />

              <button className="w-full bg-slate-900 text-white py-3 rounded-2xl font-medium">
                Submit Request
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold mb-4">Workflow</h3>

            <div className="space-y-4">
              {complaintWorkflow.map((step, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-2xl p-4 border border-slate-200"
                >
                  {index + 1}. {step}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
